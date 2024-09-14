import { medical } from './medical.model.js'
export class MedicalController {
  static getMedicalHistory (req, res) {
    const { petId } = req.params
    const result = medical.getAlls(petId, 10, 10)
    res.json(result)
  }

  static getMedicalRecord (req, res) {
    const { petId, recordId } = req.params
    console.log(`El registro médico de ID ${recordId} pertenece a la mascotora con ID ${petId} `)
    res.send('this is getMedicalRecord method')
  }

  static addMedicalRecord (req, res) {
    const { petId } = req.params
    console.log(`Registro médico añadido al historial de la mascota con ID ${petId} `)
    res.send('this is addMedicalRecord method')
  }

  static updateMedicalRecord (req, res) {
    const { petId, recordId } = req.params
    console.log(`El registro médico de ID ${recordId} de la mascotora con ID ${petId} se ha actualizado`)
    res.send('this is updateMedicalRecord method')
  }

  static deleteMedicalRecord (req, res) {
    const { petId, recordId } = req.params
    console.log(`El registro médico de ID ${recordId} de la mascotora con ID ${petId} se ha eliminado`)
    res.send('this is deleteMedicalRecord method')
  }
}
