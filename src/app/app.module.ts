import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { InputComponent } from "./ui-components/input/input.component";
import { PasswordComponent } from "./ui-components/password/password.component";

@NgModule({
  declarations: [AppComponent, InputComponent, PasswordComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
