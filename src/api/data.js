const students = [
  {
    'id': 1,
    'name': 'Hulk',
    'games': ['Football', 'Cricket', 'Tennis'],
    'selected': false
  },
  {
    'id': 2,
    'name': 'Thor',
    'games': ['Cricket', 'Tennis'],
    'selected': false
  },
  {
    'id': 3,
    'name': 'IronMan',
    'games': ['Badminton', 'Tennis', 'Chess'],
    'selected': false
  }
]

export default {
  getStudents () {
    return students
  }
}
