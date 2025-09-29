const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('add() - agrega correctamente un usuario que no está en la lista', () => {
  const controller = new UserController();
  const newUser = new User(9999, "Pedro Ramírez", "pedro@generation.org");
  
  controller.add(newUser);
  
  expect(controller.getUsers()).toContain(newUser);
  expect(controller.getUsers().length).toBe(1);
});

// TAREA 2 - Prueba 2: remove() verifica un usuario que no está en la lista
test('remove() - intenta remover un usuario que no está en la lista', () => {
  const controller = new UserController();
  const user1 = new User(1111, "Ana Torres", "ana@generation.org");
  const user2 = new User(2222, "Carlos Díaz", "carlos@generation.org");
  
  controller.add(user1);
  const lengthBefore = controller.getUsers().length;
  
  controller.remove(user2); // user2 NO está en la lista
  
  expect(controller.getUsers().length).toBe(lengthBefore);
  expect(controller.getUsers()).toContain(user1);
});

// TAREA 2 - Prueba 3: findByEmail() encuentra un usuario existente
test('findByEmail() - encuentra un usuario por email existente', () => {
  const controller = new UserController();
  const user1 = new User(3333, "Laura Méndez", "laura@generation.org");
  const user2 = new User(4444, "Jorge Silva", "jorge@generation.org");
  
  controller.add(user1);
  controller.add(user2);
  
  const found = controller.findByEmail("jorge@generation.org");
  
  expect(found).toBe(user2);
  expect(found.getName()).toBe("Jorge Silva");
  expect(found.getId()).toBe(4444);
});

// TAREA 2 - Prueba 4: findByEmail() retorna undefined cuando el email no existe
test('findByEmail() - retorna undefined cuando el email no existe', () => {
  const controller = new UserController();
  const user = new User(5555, "Diana Ruiz", "diana@generation.org");
  
  controller.add(user);
  
  const found = controller.findByEmail("noexiste@generation.org");
  
  expect(found).toBeUndefined();
});

// TAREA 2 - Prueba 5: findById() encuentra un usuario existente
test('findById() - encuentra un usuario por ID existente', () => {
  const controller = new UserController();
  const user1 = new User(6666, "Roberto Gómez", "roberto@generation.org");
  const user2 = new User(7777, "Patricia Cruz", "patricia@generation.org");
  
  controller.add(user1);
  controller.add(user2);
  
  const found = controller.findById(6666);
  
  expect(found).toBe(user1);
  expect(found.getName()).toBe("Roberto Gómez");
  expect(found.getEmail()).toBe("roberto@generation.org");
});

// TAREA 2 - Prueba 6: findById() retorna undefined cuando el ID no existe
test('findById() - retorna undefined cuando el ID no existe', () => {
  const controller = new UserController();
  const user = new User(8888, "Sofía Vargas", "sofia@generation.org");
  
  controller.add(user);
  
  const found = controller.findById(9999);
  
  expect(found).toBeUndefined();
});