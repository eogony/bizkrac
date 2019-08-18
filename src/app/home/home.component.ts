import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //arrays of Categories
  Taxation = ["Business Income Tax", "Capital Gains Tax", "Corporation Tax", "Employee Tax (PAYE)", "Export Incentives", "Fringe Benefits Tax", "Filling Tax Returns", "Indirect Taxes", "Inheritance Tax", "International Tax Compliance" ];
  accounting = [ "Accounting Management Information Systems", "Accounting Records Maintenance", "Accounts Preparation", "Accountancy / Finance Training", "Bid Support / Defence Services", "Budgeting / Forecasting", "Business Partnerships", "Business Plans", "Business Valuation", "Capital Adequacy"];
  audits = ["Asset Management Review", "Assurance / Audit Training", "Climate Change / Sustainability Audits", "Enviromental Audits", "Enviromental Impact Assessment", "Financial Statements / Statutory Audits", "Fraud Investigations", "Governance Efficiency Assessment", "HR Audit / Compliance", "Independent Examinations / Investigations" ];
  risks =  ["Actuarial Services", "Enterprise Risk Management", "Fraud Risk Management", "Political Risk Management", "Operational Risk Management", "Market Risk Assessment", "Other (specify)" ]

}
