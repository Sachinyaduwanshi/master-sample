import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuService } from '../menu.service';
import { ModuleMenu } from '../module-menu';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent  implements OnInit {
  selectedModule: string = "Menu";
  currentModuleMenus: ModuleMenu[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private menuService: MenuService) {
    
  }
  ngOnInit() {
    this.loadSelectedModuleMenu("Home");
  }

  onHomeMenuClick(){
    console.log("Home menu button clicked");
    this.selectedModule = "Menu";
    this.loadSelectedModuleMenu("Home");
  }

  onEmployeesMenuClick(){
    console.log("Employees menu button clicked");
    this.selectedModule = "Employees Menu";
    this.loadSelectedModuleMenu("Employees");
  }

  onReportMenuClick(){
    console.log("Report menu button clicked");
    this.selectedModule = "Report Menu";
    this.loadSelectedModuleMenu("Report");
  }

  loadSelectedModuleMenu(currentModule: string){
    this.menuService.getMenusByModule(currentModule)
                    .subscribe((menuData) => this.currentModuleMenus = menuData);
  }
}
