interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee'],
  tenantName: 'Organization',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View user information',
    'View organization information',
    'View employee information',
    'View vacation details',
  ],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage employees', 'Manage vacations', 'Manage payroll'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d797e474-34e3-4f63-bb76-bd11c92658a5',
};
