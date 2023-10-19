import { PayrollInterface } from 'interfaces/payroll';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  employee_id: string;
  job_title: string;
  department: string;
  hire_date: any;
  salary: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  payroll?: PayrollInterface[];
  user?: UserInterface;
  _count?: {
    payroll?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  job_title?: string;
  department?: string;
  user_id?: string;
}
