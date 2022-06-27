// Import yup

/*
  Person:
    - **firstName**: string, required
    - **lastName**: string, optional
    - **age**: positive integer number, required
*/
export const personSchema = null;

/*
  Cookie:
    - **name**: string, required
    - **type**: one of the following ['Chocolate Chip', 'Oat', 'Macademia',
                'Other'], required
    - **price**: positive float number, required
    - **link**: string, must be a valid url, optional
*/
export const cookieSchema = null;

/*
  User:
    - **username**: string, must be strings and numbers only
                    and cannot start with number, optional
    - **email**: email, required
    - **firstName**: string, required
    - **lastName**: string, optional
    - **password**: string, must be at least 8 characters, required
    - **confirmPassword:** string, must match `password`
*/
export const userSchema = null;

// Bonus: try to get the type of `user` using the `userSchema`
// Hint: look at the TypeScript section of yup.js's docs
export type User = unknown;
