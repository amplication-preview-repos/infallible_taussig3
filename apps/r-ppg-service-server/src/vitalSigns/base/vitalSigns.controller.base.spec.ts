import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { VitalSignsController } from "../vitalSigns.controller";
import { VitalSignsService } from "../vitalSigns.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bloodPressure: "exampleBloodPressure",
  createdAt: new Date(),
  heartAge: 42,
  heartRate: 42,
  heartRateVariability: 42.42,
  id: "exampleId",
  respirationRate: 42.42,
  spO2: 42.42,
  timestamp: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  bloodPressure: "exampleBloodPressure",
  createdAt: new Date(),
  heartAge: 42,
  heartRate: 42,
  heartRateVariability: 42.42,
  id: "exampleId",
  respirationRate: 42.42,
  spO2: 42.42,
  timestamp: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bloodPressure: "exampleBloodPressure",
    createdAt: new Date(),
    heartAge: 42,
    heartRate: 42,
    heartRateVariability: 42.42,
    id: "exampleId",
    respirationRate: 42.42,
    spO2: 42.42,
    timestamp: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bloodPressure: "exampleBloodPressure",
  createdAt: new Date(),
  heartAge: 42,
  heartRate: 42,
  heartRateVariability: 42.42,
  id: "exampleId",
  respirationRate: 42.42,
  spO2: 42.42,
  timestamp: new Date(),
  updatedAt: new Date(),
};

const service = {
  createVitalSigns() {
    return CREATE_RESULT;
  },
  vitalSignsItems: () => FIND_MANY_RESULT,
  vitalSigns: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("VitalSigns", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: VitalSignsService,
          useValue: service,
        },
      ],
      controllers: [VitalSignsController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /vitalSigns", async () => {
    await request(app.getHttpServer())
      .post("/vitalSigns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /vitalSigns", async () => {
    await request(app.getHttpServer())
      .get("/vitalSigns")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          timestamp: FIND_MANY_RESULT[0].timestamp.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /vitalSigns/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/vitalSigns"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /vitalSigns/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/vitalSigns"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        timestamp: FIND_ONE_RESULT.timestamp.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /vitalSigns existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/vitalSigns")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        timestamp: CREATE_RESULT.timestamp.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/vitalSigns")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
