#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const program = new Command();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Component source directory
const COMPONENTS_SRC = path.join(__dirname, '../components/ui');

program
  .command('add <component>')
  .description('Add a SNOWW-UI component folder to your project')
  .action(async (component) => {
    const sourceFolder = path.join(COMPONENTS_SRC, component);
    const destFolder = path.join(process.cwd(), 'components', 'ui', component);

    if (!fs.existsSync(sourceFolder)) {
      console.error(`❌ Component folder "${component}" not found in SNOWW-UI.`);
      process.exit(1);
    }

    if (fs.existsSync(destFolder)) {
      console.warn(`⚠️ Component "${component}" already exists in your project.`);
      process.exit(1);
    }

    try {
      await fs.copy(sourceFolder, destFolder);
      console.log(`✅ Successfully added "${component}" to your project under ./components/ui/${component}/`);
    } catch (err) {
      console.error(`❌ Error copying component:`, err);
    }
  });

program.parse(process.argv);