class Task {
  constructor(taskParams = {}) {
    Object.assign(this, taskParams)
  }

  save(callback) {
    if(typeof(this.id) === 'undefined')
      this.create(callback)
    else
      this.update(callback)
  }

  create(callback) {
    axios.post('/api/tasks', {
      task: this
    })
      .then(res => {
        callback(res)
      })
  }

  update(callback) {
    axios.patch(`/api/tasks/${this.id}`, {
      task: this
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
