class Task {
  constructor(content = '') {
    this.content = content
  }

  save(callback) {
    if(typeof(this.id) === 'undefined')
      this.create(callback)
    else
      this.update(callback)
  }

  create(callback) {
    axios.post('/api/tasks', {
      task: { content: this.content }
    })
      .then(res => {
        callback(res)
      })
  }

  update(callback) {
    axios.patch(`/api/tasks/${this.id}`, {
      task: { content: this.content }
    })
      .then(res => {
        callback(res)
      })
  }

  destroy(callback) {
    axios.delete(`/api/tasks/${this.id}`)
      .then(res => {
        callback(res)
      })
  }
}
