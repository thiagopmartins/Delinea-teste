import { NgModule } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DialogService } from "../providers/dialog.service";

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
    providers: [DialogService],
})
export class SharedModule { }