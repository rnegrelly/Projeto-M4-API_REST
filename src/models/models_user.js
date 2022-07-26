/* Constructor para criação reserva de clientes no restaurante.
   
    reservation_date - refere-se a data reservada
    reservation_hour - refere-se ao horário reservado
    booking_date_hour - refere-se ao momento em que a reserva foi criada

   */ 

class CreateClient {

    constructor(id_client, name_client, email_client, tel_client, reservation_date, reservation_hour, booking_date_hour){
        
        this.id_client = id_client
        this.name_client = name_client
        this. email_client = email_client
        this.tel_client = tel_client
        this.reservation_date = reservation_date
        this.reservation_hour = reservation_hour,
        this.booking_date_hour = booking_date_hour
        }
}

export default CreateClient