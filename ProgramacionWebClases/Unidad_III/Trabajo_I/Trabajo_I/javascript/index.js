const { createApp } = Vue;

createApp({
    data(){
      return {
        users: null,
        email: '',
        password: ''
      }
    },
    methods: {
      login(e) {
        var tmp_mail = this.mail
        var tmp_pwd = this.password

        var access = this.users.map(function (u) {
          if (tmp_mail === u.mail) {
            if (tmp_pwd === u.password) { 

              var tmp_usr = {
                name: u.name,
                username: u.username,
                email: u.email
              }
              localStorage.setItem('user', tmp_usr);

              alert("acceso correct")
            } 
            console.log('email already');
          }
        })
        console.log(this.email)
        console.log(this.password)
        
        e.preventDefault();
      }
    },
    mounted(){
      fetch('data/user.json')
        .then((res) => res.json())
        .then((json) => (this.users = json))
        .catch((err) => (alert('no data')))
    }
}).mount('#myapp')