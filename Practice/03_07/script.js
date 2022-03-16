/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const vase = {
  size: 10,
  colour: "black",
  plate: false,
  flower: {
    type: "orchid",
    colour: "green",
  },
};

console.log("This is a vase:", vase);
console.log("This is the flower inside vase:", vase.flower);
