let environmentServiceName = "dev";
let subscriptionId: string = "sub1";
let tenantId: string = "ten1";
let servicePrincipalId: string = "servicePrincipal1";
let servicePrincipalKey: string = "servicePrincipalKey123";

let expectedEnv: { [key: string]: string } = {
    'ARM_SUBSCRIPTION_ID': subscriptionId,
    'ARM_TENANT_ID': tenantId,
    'ARM_CLIENT_ID': servicePrincipalId,
    'ARM_CLIENT_SECRET': servicePrincipalKey,
}

const terraformCommand: string = "apply";
const commandOptions:string = `-input=true -lock=false -no-color -auto-approve "-var=\\"test_var=test\\"" -var='test_map="{name=\\"test\\",code=\\"abc\\"}"'`
const expectedOptions: string = `-input=true -lock=false -no-color -auto-approve -var="test_var=test" -var='test_map={name="test",code="abc"}'`;
const expectedCommand: string = `${terraformCommand} ${expectedOptions}`

export let env: any = {
    taskScenarioPath:           require.resolve('./apply-azurerm-with-options'),
    terraformCommand:           terraformCommand,
    commandOptions:             commandOptions,
    expectedOptions:            expectedOptions,
    expectedCommand:            expectedCommand,
    environmentServiceName:     environmentServiceName,
    subscriptionId:             subscriptionId,
    tenantId:                   tenantId,
    servicePrincipalId:         servicePrincipalId,
    servicePrincipalKey:        servicePrincipalKey,
    expectedEnv:                expectedEnv
}
