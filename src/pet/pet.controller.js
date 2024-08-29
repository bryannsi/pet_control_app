export class PetController {
  static createPet (req, res) {
    console.log('Mascota creada')
    res.send('this is createPet method')
    // Lógica para crear una mascota
  }

  static modifyPet (req, res) {
    console.log('Mascota con ID modificada')
    res.send('this is modifyPet method')
    // Lógica para modificar una mascota según su ID
  }

  static deletePet (req, res) {
    console.log('Mascota con ID eliminada')
    res.send('this is deletePet method')
    // Lógica para eliminar una mascota según su ID
  }

  static getPets (req, res) {
    res.send('this is getPets method')
  }

  static findPetById (req, res) {
    console.log('La mascota con el ID es:')
    res.send('this is findPetById method')
  }
}
