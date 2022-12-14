var mongoose = require('mongoose');
 
//Profile of staff (Admin applications access)

const schema = new mongoose.Schema(
	{
				
		firebaseId: { type: String, unique: true, trim: true, sparse: true }, //Firebase Id

		firstName: { type: String, trim: true },
		lastName: { type: String, trim: true },

		countryCode: { type: String, trim: true, required: true },
		city: { type: String, trim: true },

		email: { type: String, unique: true, trim: true, lowercase: true, sparse: true },
		emailVerified: { type: Date },

		password: { type: String, trim: true },

		phone: { type: Number, unique: true, trim: true, sparse: true },
		phoneVerifiedDate: { type: Date },
		
		profileImageUrl: { type: String, trim: true },

		genre: { type: String, trim: true },
		dob: { type: Date },

		language: { type: String, default: 'en' },

		isActive: { type: Boolean, default: true },

		roles: [ { type: mongoose.ObjectId, ref: 'Rol' } ],

		refreshTokens: [ 
			{
				device: { type: String, trim: true },
				token: { type: String, trim: true } 
			}
		],

		//Autogenerated y Cached 
		//Maybe this can live only in the token
		//permissions: [{ type: String }],

/*
		//TODO
		//To define this topics

		tokens: [
			{
				token: { type: String, trim: true },
				device: { type: String, trim: true },
			}
		],
		
		authenticacion_request: {
	        method:String, //email, celular, password, google, facebook
	        
	        origin_request:mongoose.Mixed,
	        created_at:Date,
	        generated_code:String, //Codigo generado por el sistema que se envia al usuario
	        expire_at:Date,  //La fecha en que la solicitud caduca

	        validation_request:mongoose.Mixed, //Dispositivo desde el que valida la solicitud
	        validated_at:Date,
	        validacion_code:String, //Codigo que ingresa el usuario debe ser igual al codigo generado
	        tries_count:Number, //Cantidad de intentos de validacion (max 3)
	        status:String, //esperando_validacion, validado, rechazado, caducado

	        extra_info: mongoose.Mixed,
	    },
*/


		//TODO
		//complete this section
		/*
		paymentMethods: [
			{
				code: { type: String, enum: ['credit_card'] },
				cardNumber: { type: String },
				cardTitle: { type: String },
				cardExpirationDate: { type: String },
				cardToken: { type: String },

			}
		],
		*/

	   
	},

	{ timestamps: true },

);

const User = mongoose.model('User', schema);

module.exports = User