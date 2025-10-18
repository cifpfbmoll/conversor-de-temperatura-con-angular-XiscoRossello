
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemperatureService {
  // Unidades soportadas (temperatura, longitud, volumen)
  readonly units = [
    'Celsius', 'Fahrenheit', 'Kelvin',
    'Millas', 'Yardas', 'Pulgadas', 'Metros',
    'Galones', 'Litros'
  ] as const;

  // Conversión a unidad base interna (Kelvin, Metros, Litros)
  private toBase(value: number, from: string): number {
    switch (from) {
      // Temperatura
      case 'Celsius': return value + 273.15;
      case 'Fahrenheit': return (value - 32) * (5 / 9) + 273.15;
      case 'Kelvin': return value;
      // Longitud
      case 'Millas': return value * 1609.344;
      case 'Yardas': return value * 0.9144;
      case 'Pulgadas': return value * 0.0254;
      case 'Metros': return value;
      // Volumen
      case 'Galones': return value * 3.78541;
      case 'Litros': return value;
      default:
        throw new Error(`Unidad de origen no soportada: ${from}`);
    }
  }

  // Conversión desde unidad base interna
  private fromBase(base: number, to: string, from: string): number {
    // Temperatura
    if (['Celsius', 'Fahrenheit', 'Kelvin'].includes(to) && ['Celsius', 'Fahrenheit', 'Kelvin'].includes(from)) {
      switch (to) {
        case 'Celsius': return base - 273.15;
        case 'Fahrenheit': return (base - 273.15) * (9 / 5) + 32;
        case 'Kelvin': return base;
      }
    }
    // Longitud
    if (['Millas', 'Yardas', 'Pulgadas', 'Metros'].includes(to) && ['Millas', 'Yardas', 'Pulgadas', 'Metros'].includes(from)) {
      switch (to) {
        case 'Millas': return base / 1609.344;
        case 'Yardas': return base / 0.9144;
        case 'Pulgadas': return base / 0.0254;
        case 'Metros': return base;
      }
    }
    // Volumen
    if (['Galones', 'Litros'].includes(to) && ['Galones', 'Litros'].includes(from)) {
      switch (to) {
        case 'Galones': return base / 3.78541;
        case 'Litros': return base;
      }
    }
    throw new Error(`Conversión no soportada entre ${from} y ${to}`);
  }

  // API pública: convierte entre dos unidades.
  // Redondea a 4 decimales para mayor precisión en longitudes y volúmenes.
  convert(value: number, from: string, to: string): number {
    if (Number.isNaN(value)) {
      throw new Error('Valor numérico inválido');
    }
    if (from === to) return value;
    const base = this.toBase(value, from);
    const result = this.fromBase(base, to, from);
    return Math.round(result * 10000) / 10000;
  }
}
