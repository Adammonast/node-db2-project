// Configure Seeds

exports.seed = function(knex) {
  return knex("cars-dealer") // Set to the created Table
    .truncate() // Change from delete
    .then(function() {
      // Dummy data for API
      const cars = [
        {
          vin: "7J3ZZ56T7834500003",
          make: "Toyota",
          model: "Camry",
          mileage: "4000",
          transmission: "Auto",
          title: "Clean"
        },
        {
          vin: "7J3ZZ56T7834511115",
          make: "Toyota",
          model: "Corolla",
          mileage: "16000",
          transmission: "Manual",
          title: "Salvage"
        },
        {
          vin: "7J3ZZ56T7834422227",
          make: "Toyota",
          model: "Corolla",
          mileage: "8000",
          transmission: "Manual",
          title: "Missing"
        }
      ];
      return knex("cars-dealer").insert(cars); // Set to the created table and pass in API data
    });
};
