const persona = {
  nombre: "Ana",
  saludar: () => {
    console.log("Hola, soy " + this.nombre); // 🚫 this no funciona como esperas
  }
};

persona.saludar(); // Hola, soy undefined
