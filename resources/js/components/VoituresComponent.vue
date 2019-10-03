<template>
    <div>
        <!-- Start: formDg -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-9 " style="margin: 47px;margin-top: -38px;">
                    <div class="card shadow-lg o-hidden border-0 my-5">
                        <div class="card-body p-0">
                            <div class="row">


                                <div class="col-lg-12">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h4 class="text-dark mb-4">Ajouter Voitures</h4>
                                        </div>
                                        <form class="user" enctype="multipart/form-data" @submit.prevent="edit ? updateVoiture(voiture.num) : createVoiture(voiture.num)" id="voitures">

                                            <div class="row">
                                                <div class="form-group col-lg-6">
                                                    <input class="form-control form-control-user" v-model="voiture.num" type="text" id="num" placeholder="Numero D'immatriculation" name="num_imma" style="font-size: 16px;">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <input class="form-control form-control-user" v-model="voiture.couleur" type="text" id="couleur" name="couleur" placeholder="Couleur" required="" style="font-size: 16px;">
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="form-group col-lg-4">
                                                    <select class="custom-select " v-model="voiture.marque"  id="marques" required="">
                                                        <option value="">Marques</option>
                                                        <option value="Alfa Romeo">Alfa Romeo</option>
                                                        <option value=" Bentley"> Bentley</option>
                                                        <option value="BMW">BMW</option>
                                                        <option value=" Cadillac"> Cadillac</option>
                                                        <option value="Dacia">Dacia</option>
                                                        <option value="Ferrari">Ferrari</option>
                                                        <option value=" Honda"> Honda</option>
                                                        <option value="Infiniti">Infiniti</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-lg-4">
                                                    <select class="custom-select " required="" v-model="voiture.capacite" id="capacite">
                                                        <option value="2">Nombre de Places</option>
                                                        <option value="5">5 places</option>
                                                        <option value="7">7 places</option>
                                                        <option value="8">8 places</option>
                                                    </select>
                                                </div>
                                                <div class="form-group col-lg-4">
                                                    <select class="custom-select " v-model="voiture.carburant"  id="carburant">
                                                        <optgroup label="Carburant">
                                                            <option value="fioul">Fioul</option>
                                                            <option value="gazole">Gazole</option>
                                                            <option value="kérosène">Kérosène</option>
                                                            <option value="GPL">GPL</option>
                                                            <option value="dihydrogène">Dihydrogène</option>
                                                        </optgroup>
                                                    </select>
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="form-group col-lg-6">
                                                    <input class="form-control form-control-user" v-model="voiture.modele" type="text"  placeholder="Modèle"  required="" style="font-size: 16px;">
                                                </div>
                                                <div class="form-group col-lg-6">
                                                    <input class="form-control form-control-user" type="text" v-model="voiture.cout"  placeholder="Cout par Jour"  required="" style="font-size: 16px;">
                                                </div>
                                            </div>

                                            <div class="custom-file">
                                                <input type="file" id="file" ref="file"   class="custom-file-input" required="" name="photo">
                                                <label class="custom-file-label">Upload File</label>
                                            </div>
                                            <div class="custom-control custom-checkbox small"></div>
                                            <button v-show="!edit" class="btn btn-primary btn-block text-white btn-user" type="submit">Valider</button>
                                            <button v-show="edit" class="btn btn-primary btn-block text-white btn-user" type="submit">Modifier</button>
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
        <!-- End: formDg -->
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
                                <tr >

                                    <td style="width: 121px;">
                                        <button class="btn btn-success update_client" type="button"      style="margin-left: 5px;" >
                                            <i class="fa fa-check" style="font-size: 15px;"></i>
                                        </button>
                                        <button class="btn btn-danger delete_client"  type="button"   style="margin-left: 5px;" >
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
        name: "VoituresComponent",
        data:function () {
            return{
                edit:false,
                list:[],
                error:[],
                file:'',
                voiture:{
                    num:'',
                    marque:'',
                    modele:'',
                    cout:'',
                    couleur:'',
                    carburant:'',
                    capacite:''
                }

            }
        },
        mounted:function () {
            this.fetchListVoiture()
        },
        methods:{
            onImageChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },

            getHost:function () {
                return 'http://127.0.0.1:8000/';
            }
            ,
            createVoiture:function () {

                this.file = this.$refs.file.files[0];
                console.log(this.file);
                let params = Object.assign({},{'cover_image':this.file},this.voiture);
                axios.post(''+this.getHost()+'api/vehicule',params,{
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }})

                    .then((resp)=>{
                        console.log('la voiture a été ajouté');
                        this.voiture.num='';
                        this.voiture.file='';
                        this.voiture.cout='';
                        this.voiture.modele='';
                        this.voiture.carburant='';
                        this.voiture.capacite='';
                        this.voiture.couleur='';
                        this.edit=false;

                    })
                    .catch((error)=>{
                        console.log(error)
                    })
            }
            ,updateVoiture:function () {

            },
            deleteVoiture:function () {

            },
            showVoiture:function () {

            },
            fetchListVoiture:function () {
                axios.get(''+this.getHost()+'api/vehicule')
                    .then((resp)=>{
                        console.log(resp.data)
                    })
            }

        }



    }
</script>

<style scoped>

</style>