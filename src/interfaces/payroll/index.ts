import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PayrollInterface {
  id?: string;
  employee_id: string;
  salary: number;
  bonus: number;
  deductions: number;
  net_pay: number;
  pay_date: any;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PayrollGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  user_id?: string;
}
