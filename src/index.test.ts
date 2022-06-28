import * as yup from "yup";

import * as schemas from ".";

const validateSchema = (schema: any): yup.ObjectSchema<any> => {
  expect(schema).not.toBe(null);
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

describe("valid cookie schema", () => {
  test("is correct type", () => {
    validateSchema(schemas.cookieSchema);
  });

  const cookie = validateSchema(schemas.cookieSchema);

  const validInput = {
    name: "Choco Chip Special",
    type: "Other",
    price: 5.5,
    link: "https://myawesomecookies.com/choco-chip",
  };
  test("accepts correct input", () => {
    expect(cookie.cast(validInput)).toStrictEqual(validInput);
  });

  test("rejects invalid input", () => {
    expect(() => {
      cookie.cast({
        type: "foo",
        price: "bar",
        link: "spam",
      });
    }).toThrow();
  });
});

describe("valid user schema", () => {
  test("is correct type", () => {
    validateSchema(schemas.userSchema);
  });

  const user = validateSchema(schemas.userSchema);

  const validInput = {
    username: "foo",
    email: "foo@bar.com",
    firstName: "foo",
    lastName: "bar",
    password: "fakePassword123",
    confirmPassword: "fakePassword123",
  };
  test("accepts correct input", () => {
    expect(user.cast(validInput)).toStrictEqual(validInput);
  });

  test("rejects invalid password", () => {
    expect(() => {
      user.cast({
        username: "_123_foo_",
        email: "foo",
        password: "fake",
        confirmPassword: "fakePassword123",
      });
    }).toThrow();
  });
});
