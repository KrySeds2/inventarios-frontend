
// import * as moment from 'moment-timezone';
// import { AddressResponse } from '../address/response/address.response';
export class Utils {
    static updatePartial(form: any){
      let request = {};
      for(let property in form) {
        if(form[property]){
          request[property] = form[property];
        }
        if(form[property] === false){
          request[property] = form[property];
        }
        if(form[property] === 0){
          request[property] = form[property];
        }
      }
      return request;
    }
    static queryByParam(obj: any): string{
      let query = "?";
      for (const key in obj) {
        query+=`${key}=${obj[key]}&`
      }
      return query.slice(0, -1);
    }
    static transformDropDown(){

    }
    // static formatDate(value: string | Date, defaultValue = '--'): string{
    //   if(!value) return defaultValue;
    //   let changeDate = value.toString();
    //   if(!moment(changeDate).isValid()) return defaultValue;
    //   let date = moment(changeDate)
    //   .parseZone()
    //   .tz("Europe/London", true)
    //   .toISOString(true);
    //   return moment(date).utcOffset(date,false).format('yyyy-MM-DD');
    // }
    // static formatAdress(address: AddressResponse){
    //   if(!address){
    //     return '';
    //   }
    //   return address.street+', '
    //   +address.suburb
    //   +' No. ext. '+address.extNumber
    //   +', '+address.intNumber
    //   +' C.P. '+address.zipCode
    //   +' '+address.city?.name
    //   +' '+address.state?.name
    //   +' '+address.country?.name+'.'
    // }
    // static formatDateTime(value:string|Date): string {
    //   if(!value) return '--';
    //   let changeDate = value.toString();
    //   if(!moment(changeDate).isValid()) return '--';
    //   let date = moment(changeDate)
    //   .parseZone()
    //   .tz("Europe/London", true)
    //   .toISOString(true);
    //   return moment(date).utcOffset(date,false).format('yyyy-MM-DD HH:mm:ss');
    // }
    // static formatTime(value:string|Date): string {
    //   if(value === 'Invalid date' || value === '-NaN:-NaN:-NaN') return '--';
    //   if(!value) return '';
    //   let changeDate = value.toString();
    //   if(changeDate.length < 9) return changeDate;
    //   let time = moment(changeDate)
    //   .parseZone()
    //   .tz("Europe/London", true)
    //   .toISOString(true);
    //   return moment(time).utcOffset(time,false).format('HH:mm:ss');
    // }



  }
