import { NgModule } from '@angular/core';
import { UserInformationCreateComponent } from './create/user-information-create.component';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';

@NgModule({
    declarations: [UserInformationCreateComponent],
    imports: [
        CommonModule,
        FlexModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
    exports: [UserInformationCreateComponent]
})

export class UserInformationModule {}
