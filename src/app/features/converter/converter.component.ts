import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemperatureService } from '../../core/temperature.service';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.scss'
})
export class ConverterComponent {
  // Formularios y resultados para cada tipo
  tempForm: FormGroup;
  tempResult?: { input: number; from: string; output: number; to: string };

  distForm: FormGroup;
  distResult?: { input: number; from: string; output: number; to: string };

  volForm: FormGroup;
  volResult?: { input: number; from: string; output: number; to: string };

  tempUnits = ['Celsius', 'Fahrenheit', 'Kelvin'];
  distUnits = ['Millas', 'Yardas', 'Pulgadas', 'Metros'];
  volUnits = ['Galones', 'Litros'];

  constructor(private fb: FormBuilder, private tempService: TemperatureService) {
    this.tempForm = this.fb.group({
      value: [null, [Validators.required, Validators.pattern(/^[-+]?\d*(?:\.|,)?\d+$/)]],
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
    this.distForm = this.fb.group({
      value: [null, [Validators.required, Validators.pattern(/^[-+]?\d*(?:\.|,)?\d+$/)]],
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
    this.volForm = this.fb.group({
      value: [null, [Validators.required, Validators.pattern(/^[-+]?\d*(?:\.|,)?\d+$/)]],
      from: [null, Validators.required],
      to: [null, Validators.required],
    });
  }

  onTempSubmit(): void {
    const raw = this.tempForm.value;
    const value = parseFloat(String(raw.value).replace(',', '.'));
    const from = raw.from as string;
    const to = raw.to as string;
    const output = this.tempService.convert(value, from, to);
    this.tempResult = { input: value, from, output, to };
  }

  onDistSubmit(): void {
    const raw = this.distForm.value;
    const value = parseFloat(String(raw.value).replace(',', '.'));
    const from = raw.from as string;
    const to = raw.to as string;
    const output = this.tempService.convert(value, from, to);
    this.distResult = { input: value, from, output, to };
  }

  onVolSubmit(): void {
    const raw = this.volForm.value;
    const value = parseFloat(String(raw.value).replace(',', '.'));
    const from = raw.from as string;
    const to = raw.to as string;
    const output = this.tempService.convert(value, from, to);
    this.volResult = { input: value, from, output, to };
  }
}
