import { ObjectSchema } from "yup";

import * as schemas from ".";

const validateSchema = (schema: any): ObjectSchema<any> => {
  expect(schema).not.toStrictEqual({});

  expect(() => {
    schema.validateSync({}, { strict: true });
  }).toThrow();

  return schema;
};

describe("valid person schema", () => {
  test("is non empty", () => {
    validateSchema(schemas.personSchema);
  });

  const personSchema = validateSchema(schemas.personSchema);
  test("accepts correct input", () => {
    expect(
      personSchema.validateSync(
        { firstName: "Mohammad", lastName: "Althunayan", age: 26 },
        { strict: true }
      )
    ).toStrictEqual({
      firstName: "Mohammad",
      lastName: "Althunayan",
      age: 26,
    });
  });

  test("accepts missing last name input", () => {
    expect(
      personSchema.validateSync(
        { firstName: "Mohammad", age: 26 },
        { strict: true }
      )
    ).toStrictEqual({
      firstName: "Mohammad",
      age: 26,
    });
  });

  test("rejects missing first name", () => {
    expect(
      personSchema.validateSync(
        { lastName: "Althunayan", age: 26 },
        { strict: true }
      )
    ).toThrow();
  });

  test("rejects invalid age", () => {
    expect(
      personSchema.validateSync(
        { firstName: "Mohammad", lastName: "Althunayan", age: "tasty" },
        { strict: true }
      )
    ).toThrow();
  });

  test("rejects negative age", () => {
    expect(
      personSchema.validateSync(
        { firstName: "Mohammad", lastName: "Althunayan", age: -26 },
        { strict: true }
      )
    ).toThrow();
  });
});
