export class PetController {
  static createPet (req, res) {
    console.log('Mascota creada')
    res.send('this is createPet method')
    // Lógica para crear una mascota
  }

  static modifyPet (req, res) {
    const { id } = req.params
    console.log(`Mascota con ID ${id} modificada`)
    res.send('this is modifyPet method')
    // Lógica para modificar una mascota según su ID
  }

  static deletePet (req, res) {
    const { id } = req.params
    console.log(`Mascota con ID ${id} eliminada`)
    res.send('this is deletePet method')
    // Lógica para eliminar una mascota según su ID
  }

  static getPets (req, res) {
    res.send('this is getPets method')
  }

  static findPetById (req, res) {
    const { id } = req.params
    console.log(`La mascota con el ID es: ${id}`)
    res.send('this is findPetById method')
  }
}
