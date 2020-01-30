import { chain, externalSchematic, Rule, Tree } from '@angular-devkit/schematics';
import * as path from 'path';
import * as fs from 'fs';

export default function(schema: any): Rule {
    return chain([
        (tree: Tree, options: any) => {          
            const dirPath = path.join(
                'libs',
                schema.library,
                'src',
                'lib',
                'pages',
                schema.name
            );

            fs.mkdirSync(dirPath, { recursive: true });
        },
        externalSchematic('@schematics/angular', 'component', {
            project: schema.library,
            name: schema.name,
            path: `libs/${schema.library}/src/lib/pages`
        })
    ]);
}