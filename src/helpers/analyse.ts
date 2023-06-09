import type { AnalyseInterface } from '@/interfaces/observatoire/helpersInterfaces';
import { ckmeans } from 'simple-statistics';

export function jenks(data: Array<any>, field: string, colors: string[], width: number[]) {
  const vals: number[] = data.map((d) => d[field]);
  const breaks = ckmeans(vals, colors.length - 1);
  const analysis: AnalyseInterface[] = breaks.map((b, i) => {
    return { val: b[0], color: hexToRgb(colors[i]), width: width[i] };
  });
  return analysis;
}

export function hexToRgb(hex: string): [number, number, number] {
  const m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  if (m) {
    const rgb: [number, number, number] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
    return rgb;
  } else {
    return [0, 0, 0];
  }
}

export function classColor(val: number, analysis: AnalyseInterface[]) {
  const classe = analysis
    .map((d) => d.val)
    .reduce((prev, curr) => {
      return Math.abs(curr - val) > Math.abs(prev - val) ? prev : curr;
    });
  return analysis.find((d) => d.val === classe)?.color || [0, 0, 0];
}

export function classWidth(val: number, analysis: AnalyseInterface[]) {
  const classe = analysis
    .map((d) => d.val)
    .reduce((prev, curr) => {
      return Math.abs(curr - val) > Math.abs(prev - val) ? prev : curr;
    });
  return analysis.find((d) => d.val === classe)?.width || 1;
}

export function getPeriod(year: number, month: number) {
  const period = {
    start_date: new Date(year, month - 1, 2).toISOString().slice(0, 10),
    end_date: new Date(year, month).toISOString().slice(0, 10),
  };
  return period;
}
