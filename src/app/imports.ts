import { StepperModule } from 'primeng/stepper';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ScrollTopModule } from 'primeng/scrolltop';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnimateModule } from 'primeng/animate';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { KnobModule } from 'primeng/knob';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressBarModule } from 'primeng/progressbar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { DataViewModule } from 'primeng/dataview';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  imports: [
    AnimateModule,
    AnimateOnScrollModule,
    ButtonModule,
    StepperModule,
    ToastModule,
    ToggleButtonModule,
    RouterOutlet,
    StepsModule,
    ScrollTopModule,
    ScrollerModule,
    ScrollPanelModule,
    KnobModule,
    CommonModule,
    FieldsetModule,
    InputNumberModule,
    ProgressBarModule,
    BreadcrumbModule,
    ChartModule,
    CardModule,
    AccordionModule,
    DividerModule,
    DataViewModule,
    ProgressSpinnerModule
  ],
  exports: [
    AnimateModule,
    AnimateOnScrollModule,
    ButtonModule,
    StepperModule,
    ToastModule,
    ToggleButtonModule,
    RouterOutlet,
    StepsModule,
    ScrollTopModule,
    ScrollerModule,
    ScrollPanelModule,
    KnobModule,
    CommonModule,
    FieldsetModule,
    InputNumberModule,
    ProgressBarModule,
    BreadcrumbModule,
    ChartModule,
    CardModule,
    AccordionModule,
    DividerModule,
    DataViewModule,
    ProgressSpinnerModule
  ],
})
export class ImportsModule {}
