import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public selectedId;
  public companies;

constructor(private _companyService: CompanyService, private router: Router, private route: ActivatedRoute) { }

ngOnInit() {
  this._companyService.getSortedByName().subscribe(
    data => {
    this.companies = data;
    }
  );
/*   this.route.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'));
    this.selectedId = id;
  
  } ); */
}

onSelect(company) {
  //this.router.navigate(['/companies', company.id]);
   this.router.navigate([company.id], { relativeTo: this.route });
}

isSelected(company) { return company.id === this.selectedId; }

}
