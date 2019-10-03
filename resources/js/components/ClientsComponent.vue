<template>
    <div>
        <!-- Start: Login-Dogs -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 col-lg-12 col-xl-10" style="margin-top: -27px;">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-flex">
                                    <div class="flex-grow-1 bg-login-image" v-bind:style='{ backgroundImage: "url("+ "img/dogs/image3.jpeg" + ")" , }' ></div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Ajouter Clients</h4>
                                        </div>

                                        <form @submit.prevent="edit ? updateClient(client.id) : createClient(client.id)" class="user" id="client">
                                            <div class="form-group"><input class="form-control form-control-user" v-model="client.nom" type="text" id="nom" aria-describedby="emailHelp" placeholder="Nom" name="Nom" style="font-size: 16px;" required=""></div>
                                            <div class="form-group"><input class="form-control form-control-user" v-model="client.prenoms" type="text" id="prenoms" placeholder="Prenoms" name="Prenoms" style="font-size: 16px;" required=""></div>
                                            <div class="form-group"><input class="form-control" v-model="client.date" id="date" type="date" required=""></div>
                                            <div class="form-group"><input class="form-control form-control-user" v-model="client.tel" type="text" id="tel" placeholder="Télephone" name="tel" style="font-size: 16px;" required=""></div>
                                            <div class="form-group"><input class="form-control form-control-user" v-model="client.email" type="email" id="email" placeholder="Email" name="email" style="font-size: 16px;" required=""></div>
                                            <div class="form-group"><input class="form-control form-control-user" v-model="client.adresse" type="text" id="adresse" placeholder="Adresse" name="adresse" style="font-size: 16px;" required=""></div>
                                            <button  v-show="!edit" class="btn btn-primary btn-block text-white btn-user" type="submit">Valider</button>
                                            <button   v-show="edit" class="btn btn-primary btn-block text-white btn-user" type="submit">Update Client</button>
                                            <hr>
                                        </form>

                                        <div class="text-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div class="row">
            <div class="col">
                <div class="container">

                    <div class="col-md-12 search-table-col" style="margin-top: 0px;"><span class="counter pull-right"></span>
                        <div class="table-responsive table-bordered table table-hover table-bordered results">
                            <table class="table table-bordered table-hover">
                                <thead class="bill-header cs">
                                <tr>
                                    <th  class="col-lg-2" style="width: 513px;">Code</th>
                                    <th  class="col-lg-3" style="width: 528px;">Nom</th>
                                    <th  class="col-lg-2" style="width: 526px;">Prenoms</th>
                                    <th  class="col-lg-2" style="width: 544px;">Date de naissance</th>
                                    <th  class="col-lg-2" style="width: 544px;">tel</th>
                                    <th  class="col-lg-2" style="width: 544px;">email</th>
                                    <th  class="col-lg-2" style="width: 544px;">Adresse</th>
                                    <th  class="col-lg-2" style="width: 544px;"></th>
                                </tr>
                                </thead>
                                <tbody >
                                    <tr v-for="client in list">
                                        <td>{{client.code_client}}</td>
                                        <td>{{client.nom_client}}</td>
                                        <td>{{client.prenoms_client}}</td>
                                        <td>{{client.date_nais_client}}</td>
                                        <td>{{client.tel_client}}</td>
                                        <td>{{client.email_client}}</td>
                                        <td>{{client.adresse_client}}</td>
                                        <td style="width: 121px;">
                                            <button class="btn btn-success update_client" type="button"  @click="showClient(client.code_client)"     style="margin-left: 5px;" >
                                                <i class="fa fa-check" style="font-size: 15px;"></i>
                                            </button>
                                            <button class="btn btn-danger delete_client"  type="button" @click="deleteClient(client.code_client)"   style="margin-left: 5px;" >
                                                <i class="fa fa-trash" style="font-size: 15px;"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="d-sm-flex justify-content-between align-items-center mb-4"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClientsComponent",
        data:function () {
            return{
                edit:false,
                list:[],
                error:[],
                client:{
                    id:'',
                    nom:'',
                    prenoms:'',
                    date:'',
                    email:'',
                    adresse:'',
                    tel:'',
                }
            }
        },
        mounted:function () {
            console.log('load mounted');
            this.fetchClientList();
        },
        computed:{
            imageUrl: function(path) {
                return "url("+ path + ")";
            }
        },
        methods:{
            getHost:function () {
                return 'http://127.0.0.1:8000/';
            }
            ,
            fetchClientList:function () {
                axios.get('http://127.0.0.1:8000/'+'api/client')
                    .then( (response) => {
                        this.list = response.data;
                        console.log(response.data)
                    })
            },


            createClient:function () {
                let self= this;
                let params = Object.assign({},this.client);
                    axios.post('http://127.0.0.1:8000/api/client',params)
                        .then((response)=>{
                            this.client.id='';
                            this.client.nom='';
                            this.client.prenoms='';
                            this.client.adresse='';
                            this.client.date='';
                            this.client.email='';
                            this.client.tel='';
                            self.edit=false;
                          //  this.fetchClientList();
                            console.log('client ajouté avec succès');
                            this.fetchClientList();
                           alert('client ajouté avec succès')
                        })
                        .catch((error)=>{
                            console.log(error)
                        })


            },

            updateClient:function (id) {
                let params=Object.assign({},this.client);
                axios.patch('http://127.0.0.1:8000/api/client/'+id,params)
                    .then((resp)=>{
                        this.client.id='';
                        this.client.nom='';
                        this.client.prenoms='';
                        this.client.adresse='';
                        this.client.date='';
                        this.client.email='';
                        this.client.tel='';
                        this.fetchClientList();
                        alert('le client a été mis à jour avec succès')
                    })
            },

            showClient:function (id) {
                console.log('show client ');
                axios.get(''+this.getHost()+'api/client/'+id)
                    .then((resp)=>{
                        console.log(resp);
                        this.client.id = resp.data.code_client;
                        this.client.nom = resp.data.nom_client;
                        //console.log(resp.data.code_client);
                        this.client.prenoms=resp.data.prenoms_client;
                        this.client.tel=resp.data.tel_client;
                        this.client.email=resp.data.email_client;
                        this.client.adresse=resp.data.adresse_client;
                        this.client.date=resp.data.date_nais_client;
                    });
                this.edit=true;
            },

            deleteClient:function (id) {
                axios.delete(''+this.getHost()+'api/client/'+id)
                    .then((resp)=>{
                        console.log('le client a été supprimé');
                        this.fetchClientList();
                        alert('le client a été supprimé');
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }

        }
    }
</script>

<style scoped>

</style>