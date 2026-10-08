import * as assert from 'assert';
import * as vscode from 'vscode';
import {
	isStructKitConfigFile,
	STRUCTKIT_DOCUMENT_PATTERNS,
	STRUCTKIT_SCHEMA_FILE_MATCH
} from '../../extension';

const EXTENSION_ID = 'kennethbelitzky.vscode-structkit';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension(EXTENSION_ID));
	});

	test('Extension should activate', async () => {
		const extension = vscode.extensions.getExtension(EXTENSION_ID);
		if (extension) {
			await extension.activate();
			assert.ok(extension.isActive);
		}
	});

	test('recognizes .structkit.yaml and legacy .struct.yaml files', () => {
		assert.ok(isStructKitConfigFile('/proj/.structkit.yaml'));
		assert.ok(isStructKitConfigFile('/proj/app.structkit.yaml'));
		assert.ok(isStructKitConfigFile('/proj/.struct.yaml'));
		assert.ok(isStructKitConfigFile('/proj/app.struct.yaml'));
		assert.strictEqual(isStructKitConfigFile('/proj/package.yaml'), false);
		assert.strictEqual(isStructKitConfigFile('/proj/docker-compose.yml'), false);
	});

	test('includes new and legacy globs for activation-style matching', () => {
		assert.ok(STRUCTKIT_DOCUMENT_PATTERNS.includes('**/.structkit.yaml'));
		assert.ok(STRUCTKIT_DOCUMENT_PATTERNS.includes('**/*.structkit.yaml'));
		assert.ok(STRUCTKIT_DOCUMENT_PATTERNS.includes('**/.struct.yaml'));
		assert.ok(STRUCTKIT_DOCUMENT_PATTERNS.includes('**/*.struct.yaml'));

		assert.ok(STRUCTKIT_SCHEMA_FILE_MATCH.includes('.structkit.yaml'));
		assert.ok(STRUCTKIT_SCHEMA_FILE_MATCH.includes('*.structkit.yaml'));
		assert.ok(STRUCTKIT_SCHEMA_FILE_MATCH.includes('.struct.yaml'));
		assert.ok(STRUCTKIT_SCHEMA_FILE_MATCH.includes('*.struct.yaml'));
	});
});
