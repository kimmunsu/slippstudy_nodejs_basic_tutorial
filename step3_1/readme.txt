spte2 �������� ��� url �� �Ѿ�͵� �������� ���ٸ�(���� ��Ʈ��) hello world �� ����Ѵ�.
�츮�� �Ϲ������� �˰� �ִ� �������� �̷��� ��û�� �༮�� �ƴϰ�, �츮�� �Ϸ��� �͵� �װ� �ƴϴ�.
url path �� http method �� ���� ���� �ٸ� return �� �ʿ��ϴ�.
�Ϲ������� �츰 �װ� route ��� ǥ���ϸ�, ���� �������� �̷��� route �� �����ϰ� �ִ�.
step2 ���� ���ȭ��Ų server.js �� �߰����� �۾����� router �� �����غ���.

1. url path �� query string �� �Ľ��� �� �ִ� url ����� �����Ѵ�. - require("url")
2. server.js �� onRequest() �Լ��� url path �� �������� console �� ����ϴ� ������ �߰��Ѵ�.



*����
URL path, query string �� ���� �츮�� �ϳ��� ����������, ����ڿ��� ���� �� ������ �� �� �ִ�.
                               url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]