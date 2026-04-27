// 🏗️ Real-world analogy

// Imagine:

// we are building signup system of a website

// User gives:

// name
// email
// age

// System must:

// validate data
// store user
// reject bad input
// find users later

// ? Custom Error
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class DuplicateError extends Error {
  constructor(message, value) {
    super(message);
    this.name = "DuplicateError";
    this.value = value;
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

// ? to generate the id automatically

function* idGen() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

// ? batch generator

function* userBatch(registry, batchSize) {
  let i = 0;

  while (true) {
    const users = registry.getAllUsers();

    if (i >= users.length) return;

    yield users.slice(i, i + batchSize);
    i += batchSize;
  }
}
// * Main Class

class UserRegistry {
  #users;
  constructor() {
    this.#users = [];
    this.idGen = idGen();
  }

  // ? adding users to the user array

  registerUser(name, email, age) {
    if (!name || name.trim() === "") {
      throw new ValidationError("Name is required", "name");
    }

    if (!email || !email.includes("@")) {
      throw new ValidationError("Invalid Email, try again!", "email");
    }

    // ? check if the email already exists or not;
    const existingUser = this.#users.find((user) => user.email === email);
    if (existingUser) {
      throw new DuplicateError("Email already used, use another one!", email);
    }

    if (typeof age !== "number" || isNaN(age) || age < 18) {
      throw new ValidationError("UnderAged", "age");
    }

    const id = this.idGen.next().value;
    this.#users.push({ id, name, email, age });
    return {
      message: "registered success",
      user: { id, name, email, age },
    };
  }

  // * find user

  findUser(email) {
    const foundUser = this.#users.find((user) => user.email === email);
    if (!foundUser) {
      throw new NotFoundError("No Such User Found!");
    }
    return foundUser;
  }

  // * get all users

  getAllUsers() {
    return [...this.#users];
  }
}

const registry = new UserRegistry();

try {
  registry.registerUser("sagar", "dangolsuwalsagar00@gmail.com", 22);

  registry.registerUser("Ram", "rams@gmail.com", 92);

  registry.registerUser("shyam", "ramss@gmail.com", 22);

  registry.registerUser("hari", "ramg@gmail.com", 82);

  registry.registerUser("ram hari", "ramds@gmail.com", 82);

  registry.registerUser("prasad", "ram@sdgmail.com", 72);

  const batchGen = userBatch(registry, 2);

  console.log("Batch 1:", batchGen.next().value);
  console.log("Batch 2:", batchGen.next().value);
  console.log(registry.getAllUsers());
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Error in ${err.field} : ${err.message}`);
  } else if (err instanceof DuplicateError) {
    console.log(`Duplicate Error: ${err.value} already exitsts`);
  } else if (err instanceof NotFoundError) {
    console.log(`NotFoundError : ${err.message}`);
  } else {
    console.log("Unknown error: ", err.message);
  }
}
