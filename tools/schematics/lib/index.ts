import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
	return chain([
		externalSchematic('@nrwl/workspace', 'lib', {
			name: schema.name
		}),
		externalSchematic('@schematics/angular', 'module', {
			name: schema.name,
			path: `libs/${schema.name}/src/lib`,
			routing: true,
			flat: true,
			lintFix: true
        })
	]);
}
