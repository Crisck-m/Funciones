const persona = {
  nombre: "Ana",
  saludar: function() {
    console.log("Hola, soy " + this.nombre); // ✅ this funciona
  }
};

persona.saludar(); // Hola, soy Ana
