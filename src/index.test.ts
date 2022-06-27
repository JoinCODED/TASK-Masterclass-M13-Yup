import * as yup from "yup";

import * as schemas from ".";

const validateSchema = (schema: any): yup.ObjectSchema<any> => {
  expect(schema).toBeInstanceOf(yup.object);
  return schema.strict(true);
};

describe("valid person schema", () => {
  test("is correct type", () => {
    validateSchema(schemas.personSchema);
  });

  const personSchema = validateSchema(schemas.personSchema);
  test("accepts correct input", () => {
    expect(
      personSchema.cast({
        firstName: "Mohammad",
        lastName: "Althunayan",
        age: 26,
      })
    ).toStrictEqual({
      firstName: "Mohammad",
      lastName: "Althunayan",
      age: 26,
    });
  });

  test("accepts missing last name input", () => {
    expect(personSchema.cast({ firstName: "Mohammad", age: 26 })).toStrictEqual(
      { firstName: "Mohammad", age: 26 }
    );
  });

  test("rejects invalid age", () => {
    expect(() => {
      personSchema.cast({
        firstName: "Mohammad",
        lastName: "Althunayan",
        age: "tasty",
      });
    }).toThrow();
  });
});
