3_4������ requestHandler �� ���� ����� �߰��Ͽ� �� url ȣ���� action �� ���� return value �� text ���ڸ� return �ϵ��� ����.
�׷��� ���ؼ��� router ������ requestHandler �� return �� ����  server �� �״�� �Ѱ������μ� router �μ��� ���ҿ� ����ϵ��� ������.
����, router �� ���� ���� �� �ִ� �κп� ���Ͽ� ���å�� ��������.
server ������ router ���� �Ѿ�� data �� response �� �ѷ��ֵ��� �غ���.

�̷��� ������ server �� url ��û�� router �� �ѱ��, router �� ��û�� �ش��ϴ� action �� ã�� handler �� ȣ���ϰų�, handler �� ���ٸ� server ���� �߸��� ��û�̾����� �˷��ֵ��� �� �� �ִ�.
server �� router�� ������ ������ url ��û�� ���� response �� ����ڿ��� �˷��� �� �ִ�.

1. requestHandler.js ���� return value �� �������ش�.
2. router.js ���� requestHandler ���� return �� value �� server �� �ٽ� return ���� �� �ֵ��� ���ش�.
   ���� handler ��ü�� ã�� ���� ��� �߸��� ��û���� �˷��ֵ��� 404 not found �� return ������.
3. server ������ router ���� �Ѿ�� data�� �������� response ����� �ϵ��� �Ѵ�.

step 4 ���� ����ϰ�����, �� ����� ryan dahl �� ����� nodejs �� �����ο� ��߳��� �������̴�.
blocking �� non-blocking �� ���������� ��ԵǴ� �� ������ step 4 ���� �ٷ絵�� �Ѵ�.
