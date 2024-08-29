export class MedicalController {
  static getMedicalHistory (req, res) { res.send('this is getMedicalHistory method') }
  static updateMedicalRecord (req, res) { res.send('this is updateMedicalRecord method') }
  static addMedicalRecord (req, res) { res.send('this is addMedicalRecord method') }
  static deleteMedicalRecord (req, res) { res.send('this is deleteMedicalRecord method') }
}
