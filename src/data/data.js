import faker from 'faker';
export const DATAS = []
for(let i=0;i<10;i++) {
    DATAS[i] = {
        name:  faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        date:faker.date.past().toLocaleDateString(),
        number :faker.datatype.float(),
        status: "Completed"
    }
}