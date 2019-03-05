import { NgModule } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        ClarityModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        ClarityModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
})
export class SharedModule { }