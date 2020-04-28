import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CreateEcoNewsService } from '../../../service/eco-news/create-eco-news.service';
import { FilterModel, LanguageModel, NewsResponseDTO } from './create-news-interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewsCancelComponent } from './create-news-cancel/create-news-cancel.component';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  public isPosting: boolean = false;

  public createNewsForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(170), this.noWhitespaceValidator]],
    source: [''],
    content: ['', [Validators.required, Validators.minLength(20)]],
    tags: this.fb.array([])
  });

  public filters: Array<FilterModel> = [
    {name: 'News', isActive: false},
    {name: 'Events', isActive: false},
    {name: 'Courses', isActive: false},
    {name: 'Initiatives', isActive: false},
    {name: 'Ads', isActive: false}
  ];

  public activeLanguage: string = 'en';
  private date: Date = new Date();
  public isFilterValidation: boolean = false;
  public isLink: boolean = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private createEcoNewsService: CreateEcoNewsService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.onSourceChange();
  }

  private navigateByUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  public onSourceChange(): void {
    this.createNewsForm.get('source').valueChanges.subscribe(source => {
      if(source.startsWith('http://') || source.startsWith('https://')) {
        this.isLink = false;
      } else {
        this.isLink = true;
      }
    });

  }

  public onSubmit(): void {
    this.isPosting = true;
    this.createEcoNewsService.sendFormData(this.createNewsForm).subscribe(
      (successRes: NewsResponseDTO) => {
        this.isPosting = false;
        this.router.navigate(['/news']);
      }
    );
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhiteSpace = (control.value || '').trim().length === 0;
    const isValid = !isWhiteSpace;
    return isValid ? null : { 'whitespace': true };
  }

  public addFilters(filter: FilterModel): void {
    if ( !filter.isActive ) {
      filter.isActive = true;
      this.createNewsForm.value.tags.push(filter.name.toLowerCase());
      this.filtersValidation(filter);
    } else {
      this.removeFilters(filter);
    };
  };

  public removeFilters(filter: FilterModel): void {
    if ( filter.isActive ) {
      filter.isActive = false;
      this.createNewsForm.value.tags.forEach((item, index) => {
        if (item.toLowerCase() === filter.name.toLowerCase()) {
          this.createNewsForm.value.tags.splice(index, 1);
          this.filtersValidation(filter);
        };
      });
    };
  };

  public filtersValidation(filter: FilterModel): void {
    if ( this.createNewsForm.value.tags.length > 3) {
      this.isFilterValidation = true;
      setTimeout(() => this.isFilterValidation = false, 3000);
      this.createNewsForm.value.tags.splice(3,1);
      filter.isActive = false;
    };
  };

  private goToPreview(): void {
    this.createEcoNewsService.setForm(this.createNewsForm);
    this.navigateByUrl('create-news/preview');
  }

  private openCancelPopup(): void {
    this.dialog.open(CreateNewsCancelComponent, {
      hasBackdrop: true,
      closeOnNavigation: true,
      disableClose: true,
      panelClass: 'custom-dialog-container',
    });
  }
}