// CommonJS wrapper to run the TypeScript seed with ts-node in transpile-only mode
try {
  require('ts-node').register({
    transpileOnly: true,
    // Ensure CommonJS output to avoid ESM loader issues
    compilerOptions: { module: 'commonjs' },
  });
} catch (e) {
  console.error('ts-node register failed:', e);
  process.exit(1);
}

// Require the actual TypeScript seed file
require('./seed.ts');
