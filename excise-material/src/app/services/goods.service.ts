import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GoodsModel } from '../models/goods-model';

@Injectable()
export class GoodsService {

  private dataSource = new BehaviorSubject<GoodsModel[]>([
    { value: 'good1', text: 'ยาสูบ' },
    { value: 'good2', text: 'เครื่องไฟฟ้า' },
    { value: 'good3', text: 'ผลิตภัณฑ์เครื่องหอมและเครื่องสำอาง' },
    { value: 'good4', text: 'เรือ' },
    { value: 'good5', text: 'กิจการเสี่ยงโชค' },
    { value: 'good6', text: 'น้ำมันและผลิตภัณฑ์น้ำมัน' },
    { value: 'good7', text: 'ไพ่' },
    { value: 'good8', text: 'โทรคมนาคม' },
    { value: 'good9', text: 'เครื่องดื่มและเครื่องขายเครื่องดื่ม' },
    { value: 'good10', text: 'รถยนต์' },
    { value: 'good11', text: 'เบียร์และสุรา' },
    { value: 'good12', text: 'กิจการบันเทิงหรือหย่อนใจ' },
    { value: 'good13', text: 'สนามกอล์ฟ' },
    { value: 'good14', text: 'แก้วและเครื่องแก้ว' },
    { value: 'good15', text: 'สินค้าอื่นๆ' }
  ]);
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: GoodsModel[]) {
    this.dataSource.next(data)
  }

}
