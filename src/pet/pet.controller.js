import { pet } from './pet.model.js'
export class PetController {
  static async createPet (req, res) {
    const result = pet.create(req.body)
    console.log(result)
    res.send('this is createPet method')
    // Lógica para crear una mascota
  }

  static async modifyPet (req, res) {
    const data = { id: req.params.id, ...req.body }
    const result = pet.modify(data)
    console.log(result)
    res.send('this is modifyPet method')
    // Lógica para modificar una mascota según su ID
  }

  static async deletePet (req, res) {
    const { id } = req.params
    console.log(`Mascota con ID ${id} eliminada`)
    res.send('this is deletePet method')
    // Lógica para eliminar una mascota según su ID
  }

  static async getPets (req, res) {
    res.send('this is getPets method')
  }

  static async findPetById (req, res) {
    const { id } = req.params
    console.log(`La mascota con el ID es: ${id}`)
    res.send('this is findPetById method')
  }
}
