$(document).ready(function () {

    console.log('ok');
    let host = '127.0.0.1:8000/';
    
    $('#client').on('submit',function (e) {
        e.preventDefault();
        let nom = $('#nom').val();
        let prenoms=$('#prenoms').val();
        let date_nais=$('#date').val();
        let tel =$('#tel').val();
        let email =$('#email').val();
        let adresse = $('#adresse').val();
        addClient(nom,prenoms,date_nais,tel,email,adresse);

    });

    getClient();

    function addClient(nom,prenoms,date,tel,email,adresse) {

        $.ajax({
            url:'http://'+host+'api/client',
            method:'POST',
            data:{nom:nom,prenoms:prenoms,date:date,email:email,tel:tel,adresse:adresse},

            success:function () {
                console.log('client crée') ;
                alert('Le client  a été ajouté');
                location.reload();
            },
            error:function () {
                console.log('echec')
            }
        })

   }

   $('body').on('click','.delete_client ',function () {
        console.log('delete');
        let code = $(this).data('id');
        deleteClient(code);
   });

    $('body ').on('click','.update_client',function(){
        console.log('modal update ok');
        let id = $(this).data('id_');
        getUpdateClient(id);

        $('#modal_update').on('submit',function () {
            //e.preventDefault();
            let nom = $('#nom_').val();
            let prenoms=$('#prenoms_').val();
            let date=$('#date_').val();
            let tel =$('#tel_').val();
            let email =$('#email_').val();
            let adresse = $('#adresse_').val();
            console.log('update entrer')
            updateClient(id,nom,prenoms,date,tel,email,adresse)
        });

    });





    function showClient(id) {
        $.ajax({
            method:'GET',
            url:'http://'+host+'api/client/'+id,
            success:function (dat) {
                console.log('show client ok');
                console.log(dat);
            },
            error:function () {
                console.log('error show client')
            }
        })
    }

   function deleteClient(id) {
       $.ajax({
           method:'POST',
           url:'http://'+host+'api/client/'+id,
           data:{_method:'DELETE'},
           success:function (data) {
               console.log('delete client');
               alert('Le client  a été supprimé');
               location.reload();
           },
           error:function () {
               console.log('echec delete');
           }
       })
   }


   function updateClient(id,nom,prenoms,date,tel,email,adresse) {
       $.ajax({
           url:'http://'+host+'api/client/'+id,
           method:'POST',
           data:{nom:nom,prenoms:prenoms,date:date,email:email,tel:tel,adresse:adresse,_method:'PUT'},

           success:function () {
               console.log('client crée') ;
               alert('Le client  a été modifié');
               //location.reload();
           },
           error:function () {
               console.log('echec update client')
           }
       })
   }
   



    function getUpdateClient(id) {
       $.ajax({
           url:'http://'+host+'api/client/'+id,
           method:'GET',

           success:function () {
               console.log('getclients avec id')
           },
           error:function () {
               console.log('echec client avec id')
           }
        }).done(function (items) {
           let o=''
           $.each(items,function (key,item) {

               o+=`
            <div class="modal-content">
            <div class="modal-header" style="padding:35px 50px;">
                <h1>Update Client</h1>
                <button type="" class="close"  data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" style="padding:40px 50px;">
                <form role="form" id="modal_update">
                    <div class="form-group">
                        <input type="text" class="form-control"  value="${item.nom_client}" id="nom_" placeholder="Nom">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control"  value="${item.prenoms_client}" id="prenoms_" placeholder="Prenoms">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="${item.tel_client}" id="tel_" placeholder="Télephone">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="${item.email_client}" id="email_" placeholder="email" value="">
                    </div>
                    <div class="form-group">
                        <label for="usrname"><span class="glyphicon glyphicon-user"></span>Date de Naissance</label>
                        <input type="date" class="form-control" value="${item.date_nais_client}" id="date_" placeholder="date">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" value="${item.adresse_client}" id="adresse_" placeholder="adresse">
                    </div>
                    <button type=""    class="btn btn-success btn-block"><span class="glyphicon glyphicon-off"></span>update</button>
                </form>
            </div>
        </div>`
           });
           $('#modal_').append(o);
       })

    }

    function getClient() {
        $.ajax({
            url:'http://'+host+'api/client',
            method:'GET',

            success:function () {
                console.log('getclients')
            },
            error:function () {
                console.log('echec client')
            }
        }).done(function (items) {
            let out='';
            console.log(items);
            $.each(items,function (key,item) {

                out+=`
                                        <tr >
                                         <td>${item.code_client}</td>
                                         <td>${item.nom_client}</td>
                                         <td>${item.prenoms_client}</td>
                                         <td>${item.date_nais_client}</td>
                                         <td>${item.email_client}</td>
                                         <td>${item.tel_client}</td>
                                         <td>${item.adresse_client}</td>
                                            <td style="width: 121px;">
                                                <button class="btn btn-success update_client" id="m"  data-id_="${item.code_client}"   data-toggle="modal" data-target="#myModal"  type=""  style="margin-left: 5px;" >
                                                    <i class="fa fa-check" style="font-size: 15px;"></i>
                                                </button>
                                                <button class="btn btn-danger delete_client" data-id="${item.code_client}"   style="margin-left: 5px;" > 
                                                    <i class="fa fa-trash" style="font-size: 15px;"></i>
                                                </button>
                                            </td>
                                         </tr>
                       
                                       `;

            });
            $('#tb_client').append(out)
        })
    }

});