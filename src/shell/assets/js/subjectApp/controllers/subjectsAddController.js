SubjectApp.SubjectsAddController = Ember.ObjectController.extend({
    inContactInfo: true,
    inDemogrphs: false,
    inGuardian: false,
    inMedication: false,
    inConditions: false,
    inAllergies: false,
    inInmunization: false,
    birthdayDay: 1,
    birthdayMonth: 1,
    birthdayYear: 1970,    
    days: function(){
      var result = [];
      for (var i = 1 ; i < 32; i++) {
          result.pushObject(i);
      };
      return result;
    }.property(),
    months:[{name:'January',value:0},{name:'February',value:1},{name:'March',value:2},{name:'April',value:3},{name:'May',value:4},{name:'June',value:5},{name:'July',value:6},{name:'August',value:7},{name:'September',value:8},{name:'October',value:9},{name:'November',value:10},{name:'December',value:11}],    
    years: function(){
      var result = [];
      for (var i = 1970 ; i < 2017; i++) {
          result.pushObject(i);
      };
      return result;
    }.property(),

    actions: {
        add: function(){
            var subject = this.store.createRecord('subject', {
              contactInformation : this.store.createRecord('contactInformation', this.model.contactInformation),
              demographic : this.store.createRecord('demographic', this.model.demographics),
              guardian : this.store.createRecord('guardian', this.model.guardian)
            });

            subject.get("allergies").pushObjects(this.model.allergies);

            subject.save().then(function(){
                 $("table tr").last().attr("item", subject.get('id') );
            });

            this.transitionToRoute('subjects');
        },
        
        addAllergy: function(){
          this.model.allergies.pushObject(this.store.createRecord('allergy', {name: 'randomName_' + Math.random()}))
        },

        showContactInfo: function(){
          this.hideAll();
          this.set('inContactInfo',true);
        },
        showDemogrphs: function(){
          this.hideAll();
          this.set('inDemogrphs',true);
        },
        showGuardian: function(){
          this.hideAll();
          this.set('inGuardian',true);
        },
        showMedication: function(){
          this.hideAll();
          this.set('inMedication',true);
        },
        showConditions: function(){
          this.hideAll();
          this.set('inConditions',true);
        },
        showAllergies: function(){
          this.hideAll();
          this.set('inAllergies',true);
        },
        showInmunization: function(){
          this.hideAll();
          this.set('inInmunization',true);
        },  
        nextInfo: function(){
          if(this.get('inContactInfo')){
            this.send('showDemogrphs');
          }
          else if(this.get('inDemogrphs')){ 
            this.updateBirthday();           
            this.send('showGuardian');
          }
          else if(this.get('inGuardian')){
            this.send('showMedication');
          }
          else if(this.get('inMedication')){
            this.send('showConditions');
          }
          else if(this.get('inConditions')){
            this.send('showAllergies');
          }
          else if(this.get('inAllergies')){
            this.send('showInmunization');
          }
          else if(this.get('inInmunization')){

          }
          else{

          }
        },
        saveModel: function(){
          var subject = this.get('model')
          if(subject.validateSubject()){
            subject.save();
            this.transitionToRoute('subjects');
          }
          else{
            //Do something here,like show alert messages.
          }
          
        },

        resetContactInfo: function(){
          this.set('firstName','');
          this.set('middleName','');
          this.set('lastName','');
          this.set('address','');
          this.set('zipCode','');
          this.set('city','');
          this.set('state','');
          this.set('country','');
          this.set('email','');
          this.set('homePhone','');
          this.set('workPhone','');
          this.set('cellPhone','');
          this.set('alternatedCellPhone','');
          this.set('nativeLanguage','');          
        },

        resetDemographic: function(){
          this.set('birthday','');
          this.set('gender','');
          this.set('height','');
          this.set('weight','');
          this.set('heartRate','');
          this.set('bloodPreasureBelow','');
          this.set('bloodPreasureOver','');
          this.set('race','');
          this.set('ethnicity','');
          this.set('maritalStatus','');                  
        },

        resetGuardian: function(){
          this.set('name','');
          this.set('relationShip','');
          this.set('facilityType','');
          this.set('facility','');
          this.set('address','');
          this.set('email','');
          this.set('phone','');          
        }


          


    },

    hideAll: function(){
          this.set('inContactInfo',false);
          this.set('inDemogrphs',false);
          this.set('inGuardian',false);
          this.set('inMedication',false);
          this.set('inConditions',false);
          this.set('inAllergies',false);
          this.set('inInmunization',false);          
        },
    updateBirthday: function(){
          var year = this.get('birthdayYear');
          var month = this.get('birthdayMonth');
          var day = this.get('birthdayDay');
          this.set('birthday',new Date(year, month, day))
    }
});
